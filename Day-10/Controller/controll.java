package com.example.bala.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.bala.Model.model;
import com.example.bala.Service.ser;
@CrossOrigin
@RestController
public class controll {
    @Autowired
     ser apiService;
    @GetMapping("/")
    public List<model> getAllStudents() {
        return apiService.getAllStudents();
    }
    @GetMapping("/{email}")
    public model getStudentByEmail(@PathVariable String email) {
        return apiService.getStudentByEmail(email);
    }
    @PostMapping("/post")
    public boolean createStudent(@RequestBody model m) {
        return apiService.createStudent(m);
    }
    
    @PutMapping("/{email}")
    public model updateStudent( @RequestBody model model,@PathVariable String email) {
        return apiService.updateStudent(email, model);
    }
    @DeleteMapping("/{email}")
    public boolean deleteStudent(@PathVariable String email) {
       return apiService.deleteStudent(email);
    }
}

