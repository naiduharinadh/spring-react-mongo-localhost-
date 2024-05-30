package com.project2.project2.Database;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class dbFunctions {
    @Autowired
    mongodbRepo mongodbRepo ;

    public usersDocModel addUser(usersDocModel user){
        mongodbRepo.save(user);
        return user;
    }
    public usersDocModel findmyuser(String Id){
        return mongodbRepo.findById(Id).get();
    }

    public List<usersDocModel> getallusers(){
        return mongodbRepo.findAll();
    }
}
