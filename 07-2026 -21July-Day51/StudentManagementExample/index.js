const student = require("./student");

student.insert("Ajinkya");
student.insert("Aryan");

student.display();

student.update("Aryan" , "Samarth");

student.remove("Aryan");

student.display();


