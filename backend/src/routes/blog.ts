import { Hono } from "hono";
import { verify } from 'hono/jwt'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

// Create the main Hono app
export const blogRouter = new Hono<{
    Bindings:{
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables:{
        userId: string;
    }
}>();

blogRouter.use('/*', async (c, next) => {
	const header = c.req.header("authorization") || "";
	//Bearer token
	const token = header.split(" ")[1];
	const user  = await verify(token, c.env.JWT_SECRET)
	if(user){
        //@ts-ignore
	    c.set("userId", user.id);
        await next();
	}
	else{
		c.status(403);
		return c.json({error: "unauthorized access"})
	}
	
  })

  

  blogRouter.get('/bulk', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate());
    const blogs = await prisma.post.findMany({
        select:{
            content: true,
            title: true,
            id: true,
            author: {
                select:{
                    name: true,
                }
            }
        }
    });
    
    return c.json({
        blogs
    })

})  


blogRouter.get('/:id', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate());

   const id = await c.req.param("id");  
    try {
        const blog = await prisma.post.findFirst({
            where:{
                id: id
            },
            select:{
                title: true,
                content: true,
                id: true,
                author: {
                    select:{
                        name: true,
                    }
                }
            }
        });
        return c.json({
            blog
        })
    
    } catch (error) {
        c.status(411);
        c.json({
            error: "Failed to get blog"
        })
    } 
})

blogRouter.post('/', async(c) => {
    const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate());

    const body = await c.req.json();
    const userId = c.get("userId")
    try {
        const blog = await prisma.post.create({
            data:{
                title: body.title,
                content: body.content,
                authorId: userId
            }
        });
        return c.json({
            id: blog.id
        })
    
    } catch (error) {
        c.status(404);
        c.json({
            error: "Failed to create blog"
        })
    }   
 

	
})

blogRouter.put('/', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate());

    const body = await c.req.json();
    try {
        const blog = await prisma.post.update({
            where:{
                id: body.id
            },
            data:{
                title: body.title,
                content: body.content,
            }
        });
        return c.json({
            id: blog.id
        })
    
    } catch (error) {
        c.status(404);
        c.json({
            error: "Failed to update blog"
        })
    } 
})

