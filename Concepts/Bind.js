const sai = {
    firstName : "Sai",
    lastName : "Reddy",
    role : "Admin",
    courseCount : 3,
    getInfo : function(){
        console.log(`
            fisr name is : ${this.firstName}
            last name is : ${this.lastName}
            his role is : ${this.role}          
        `);
    }
}

const dj =  {
    firstName : "Hema",
    lastName : "Reddy",
    role : "User",
    courseCount : 1,
}

const djInfo = sai.getInfo.bind(dj);
djInfo();

sai.getInfo();