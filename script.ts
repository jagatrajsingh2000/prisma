import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
// const prisma = new PrismaClient({log: ["query"]})

async function main(){
    // await prisma.user.deleteMany()

    // const user = await prisma.user.update({
    //     where: {
    //         email:'jagat@gmail.com'
           
    //     },
    //     data: {
    //         email: "jagatraj@gmail.com",
    //     }
    // })
    const user = await prisma.user.update({
        where: {
            email:'jagat@gmail.com'
           
        },
        data: {
            age:{
                // multiply: 10
                increment: 10
            }
        }
    })

    // const user = await prisma.user.findUnique({
    //     where: {
    //         age_name:{
    //             age:16,
    //             name:'jagat'
    //         }
    //     }
    // })
    // must have unique property to it 

    // const user = await prisma.user.findFirst({
    //     where: {
    //         name:'jagat'
    //     }
    // })
    // find first thing which  matches

     // const user = await prisma.user.findMany({
    //     where: {
    //         name:'jagat'
    //     }
    // })
    // find first thing which  matches 



    // const user = await prisma.user.create({
    //     data: {
    //         name:'jagat',
    //         email:'jagat@gmail.com',
    //         age:16,
    //         userPreference: {
    //             create: {
    //                 emailUpdates: true
    //             },
    //         },
            
    //     },
    //     // include: {
    //     //     userPreference: true
    //     // }
    //     select: {
    //         name:true,
    //         userPreference:{ select: {
    //             id : true
    //         }}
    //     }
    //     //  can use include and select together
        
    // })
    console.log(user)
}


main()
    .catch(e => {
        console.error(e.message)
        
    })
    .finally(async () =>{
        await prisma.$disconnect()
    })