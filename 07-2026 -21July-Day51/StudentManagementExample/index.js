const student = require("./student");

student.insert("Ajinkya");
student.insert("Aryan");

student.display();

student.update("Aryan" , "Pruthviraj");

student.remove("Aryan");

student.display();


