package com.example.bala.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.bala.Model.model;
import com.example.bala.Repository.repo;
@Service
public class ser{
    @Autowired
    private repo studentRepository;
    public List<model> getAllStudents() {
        return studentRepository.findAll();
    }
    public model getStudentByEmail(String Email) {
        return studentRepository.findById(Email).get();
    }
    public boolean createStudent(model m) {
        return studentRepository.save(m) != null? true:false;
    }
  
    public model updateStudent(String email, model m) {
    	model stu = studentRepository.findById(email).get();
        stu.setName(m.getName());
        stu.setEmail(m.getEmail());
        stu.setPassword(m.getPassword());
        stu.setConfirmpassword(m.getConfirmpassword());
      return studentRepository.save(stu);
    }
    public boolean deleteStudent(String email) {
    	
        if(studentRepository.findById(email).isPresent()){
            studentRepository.deleteById(email);
          return true;
        } 
        return false;
    }
}
