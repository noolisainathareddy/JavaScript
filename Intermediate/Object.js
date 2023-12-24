var user = {
    firstName : "sai", 
    lastName : "Reddy", 
    age : 26,
    email : "snsreddy096@gmail.com",
    courseList : [],
    buyCourse : function (courseName){
        this.courseList.push(courseName);
        return `Enrolled for the ${courseName} course`; 
    },
    getCourseCount : function () {
        return `${this.firstName} enrollerd in ${this.courseList.length} courses`;
    }

};

console.log(user.firstName); 

console.log(user["age"]);

console.log(user.getCourseCount());
console.log(user.buyCourse("ReactJS")); 
console.log(user.getCourseCount());