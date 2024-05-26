package com.project2.project2.Database;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.annotation.Collation;

@Collation(value="database2024")
public class usersDocModel {

   // {userId,contact,email,reEnterPassword}
    @Id
    private String userId;

    private String email;

    private String contact;
    private String reEnterPassword;

/*    usersDocModel(){};

    usersDocModel(String name, String userid){
        this.userid = userid;
        this.name = name;
    }*/
    public void setEmail(String email){
        System.out.println(email);
        this.email = email ;
    }
    public void setUserId(String userId){
        System.out.println(userId);
        this.userId= userId;
    }
    public void setContact(String contact){
        System.out.println(contact);
        this.contact = contact;
    }
    public void setReEnterPassword(String reEnterPassword){
        System.out.println(reEnterPassword);
        this.reEnterPassword = reEnterPassword;
    }


    //getters
    public String getUserId(){
        return userId;
    }
    public String getEmail(){
        return email;
    }
    public String getContact(){
        return contact;
    }
    public String getReEnterPassword(){
        return reEnterPassword;
    }

}
