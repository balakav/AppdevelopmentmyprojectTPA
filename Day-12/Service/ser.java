package com.example.bala.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.bala.Model.Hotel;
import com.example.bala.Model.bus;
import com.example.bala.Model.car;
import com.example.bala.Model.chennai;
import com.example.bala.Model.children;
import com.example.bala.Model.covai;
import com.example.bala.Model.education;
import com.example.bala.Model.family;
import com.example.bala.Model.feedback;
import com.example.bala.Model.flaight;
import com.example.bala.Model.kanniyakumari;
import com.example.bala.Model.madurai;
import com.example.bala.Model.model;
import com.example.bala.Model.train;
import com.example.bala.Repository.brepo;
import com.example.bala.Repository.cirepo;
import com.example.bala.Repository.cnrepo;
import com.example.bala.Repository.covairepo;
import com.example.bala.Repository.crepo;
import com.example.bala.Repository.enrepo;
//import com.example.bala.Repository.fkrepo;
import com.example.bala.Repository.ftrepo;
import com.example.bala.Repository.fyrepo;
import com.example.bala.Repository.kkrepo;
import com.example.bala.Repository.repo;
import com.example.bala.Repository.repo1;
import com.example.bala.Repository.repo3;
import com.example.bala.Repository.trrepo;
@Service
public class ser{
    @Autowired
    private repo studentRepository;
    @Autowired
    private repo1 sr;
    @Autowired
    private repo3 ma;
    @Autowired
    private brepo b;
    @Autowired
    private cirepo ci;
    @Autowired
    private cnrepo cn;
    @Autowired
    private covairepo covai;
    @Autowired
    private crepo c;
    @Autowired
    private enrepo en;
//    @Autowired
//    private fkrepo fk1;
    @Autowired
    private ftrepo ft;
    @Autowired
    private fyrepo fy;
    @Autowired
    private kkrepo kk;
    @Autowired
    private trrepo tr;
 
    public List<model> getAllStudents() {
        return studentRepository.findAll();
    }
    public model getStudentByEmail(String Email) {
        return studentRepository.findById(Email).get();
    }
    //post method for 14 tables;
    public boolean createStudent(model m) {
        return studentRepository.save(m) != null? true:false;
    }
    public boolean createhotelform(Hotel g) {
        return sr.save(g) != null? true:false;
    }
    public boolean maduraionedaytrip(madurai f) {
        return ma.save(f) != null? true:false;
    }
    public boolean chennaionedaytrip(chennai gh) {
        return ci.save(gh) != null? true:false;
    }
    public boolean covaionedaytrip(covai ij) {
        return covai.save(ij) != null? true:false;
    }
    public boolean kanniyakumarionedaytrip(kanniyakumari kl) {
        return kk.save(kl) != null? true:false;
    }
    public boolean childrenonedaytrip(children mn) {
        return cn.save(mn) != null? true:false;
    }
    public boolean familyonedaytrip(family op) {
        return fy.save(op) != null? true:false;
    }
    public boolean educationonedaytrip(education qr) {
        return en.save(qr) != null? true:false;
    }
//    public boolean feedback1(feedback stu) {
//        return fk1.save(stu) != null? true:false;
//    }
    public boolean busticket(bus uv) {
        return b.save(uv) != null? true:false;
    }
    public boolean trainticket(train w) {
        return tr.save(w) != null? true:false;
    }
    public boolean flaightticket(flaight x) {
        return ft.save(x) != null? true:false;
    }
    public boolean carticket(car yz) {
        return c.save(yz) != null? true:false;
    }
  
    
    
    //put for 14 tables;
    public model updateStudent(String email, model m) {
    	model stu = studentRepository.findById(email).get();
        stu.setName(m.getName());
        stu.setEmail(m.getEmail());
        stu.setPassword(m.getPassword());
        stu.setConfirmpassword(m.getConfirmpassword());
      return studentRepository.save(stu);
    }
    
    //delete for 14 tables
    public boolean deletereg(String email) {
    	
        if(studentRepository.findById(email).isPresent()){
            studentRepository.deleteById(email);
          return true;
        } 
        return false;
    }
    
 public boolean deletebus(String email) {
    	
        if(studentRepository.findById(email).isPresent()){
            studentRepository.deleteById(email);
          return true;
        } 
        return false;
    }
 public boolean deletecar(String email) {
 	
     if(studentRepository.findById(email).isPresent()){
         studentRepository.deleteById(email);
       return true;
     } 
     return false;
 }
 public boolean deletechennai(String email) {
 	
     if(studentRepository.findById(email).isPresent()){
         studentRepository.deleteById(email);
       return true;
     } 
     return false;
 }
 public boolean deletechildren(String email) {
 	
     if(studentRepository.findById(email).isPresent()){
         studentRepository.deleteById(email);
       return true;
     } 
     return false;
 }
 public boolean deletecovai(String email) {
 	
     if(studentRepository.findById(email).isPresent()){
         studentRepository.deleteById(email);
       return true;
     } 
     return false;
 }
 public boolean deleteeducation(String email) {
 	
     if(studentRepository.findById(email).isPresent()){
         studentRepository.deleteById(email);
       return true;
     } 
     return false;
 }
 public boolean deletefamily(String email) {
 	
     if(studentRepository.findById(email).isPresent()){
         studentRepository.deleteById(email);
       return true;
     } 
     return false;
 }
 public boolean deletefeedback(String email) {
 	
     if(studentRepository.findById(email).isPresent()){
         studentRepository.deleteById(email);
       return true;
     } 
     return false;
 }
 public boolean deleteflaight(String email) {
 	
     if(studentRepository.findById(email).isPresent()){
         studentRepository.deleteById(email);
       return true;
     } 
     return false;
 }
 public boolean deletehotel(String email) {
 	
     if(studentRepository.findById(email).isPresent()){
         studentRepository.deleteById(email);
       return true;
     } 
     return false;
 }
 public boolean deletekanniyakumari(String email) {
 	
     if(studentRepository.findById(email).isPresent()){
         studentRepository.deleteById(email);
       return true;
     } 
     return false;
 }
 public boolean deletemadurai(String email) {
 	
     if(studentRepository.findById(email).isPresent()){
         studentRepository.deleteById(email);
       return true;
     } 
     return false;
 }
 public boolean deletetrain(String email) {
 	
     if(studentRepository.findById(email).isPresent()){
         studentRepository.deleteById(email);
       return true;
     } 
     return false;
 }
 
}
