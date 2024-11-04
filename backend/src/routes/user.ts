import { Hono } from "hono";
import { sign } from 'hono/jwt'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { signupInput } from 'satyamrai553medium-blog'

// Create the main Hono app
export const userRouter = new Hono<{
    Bindings:{
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
}>();




userRouter.post('/signup', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate());
	
	const body = await c.req.json()
	const {success} = signupInput.safeParse(body);
	
	if(!success){
		c.status(403);
        return c.json({
            error: "Invalid input"
        })
	}

	try {
		const user = await prisma.user.create({
			data:{
				email: body.email,
				password: body.password,
				name: body.name,
			}, 
		})
	
		const token = await sign({id: user.id}, c.env.JWT_SECRET);
		return c.json({
			name: user.name,
			jwt: token
		})
	} catch (error) {
		c.status(403);
		return c.json({
			error: "error while singing up"
		})
	}
})

userRouter.post('/signin', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl:c.env?.DATABASE_URL,
	}).$extends(withAccelerate());

	const body = await c.req.json();
	const user = await prisma.user.findUnique({
		where:{
			email:body.email,
			password:body.password,
		}
	});

	if(!user){
		c.status(403);
		return c.json({
			error:"user not found"
		});
	}
	const jwt = await sign({id: user.id}, c.env.JWT_SECRET);
	return c.json({
		name: user.name,
		jwt: jwt
	 });
})
