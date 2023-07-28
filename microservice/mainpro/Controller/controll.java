package com.example.bala.Controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.bala.Service.WeatherService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

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
import com.example.bala.Service.ser;
@CrossOrigin
@RestController
@RequestMapping("/api/v1/user")
public class controll {
    @Autowired
     ser apiService;
    @Autowired
    private WeatherService weatherService;
    @GetMapping("/reg")
    public List<model> getAllStudents() {
        return apiService.getAllStudents();
    }
    @GetMapping("/bususer")
    public List<bus> getbususers() {
        return apiService.getAllbususers();
    }
    @GetMapping("/caruser")
    public List<car> getAllcaruser() {
        return apiService.getAllcaruser();
    }
    @GetMapping("/chennaiuser")
    public List<chennai> getAllchennaiuser() {
        return apiService.getAllchennaiuser();
    }
    @GetMapping("/children")
    public List<children> getAllchildren() {
        return apiService.getAllchildren();
    }
    @GetMapping("/education")
    public List<education> getAlleducation() {
        return apiService.getAlleducation();
    }
    @GetMapping("/family")
    public List<family> getAllfamily() {
        return apiService.getAllfamily();
    }
    @GetMapping("/feedback")
    public List<feedback> getAllfeedback() {
        return apiService.getAllfeedback();
    }
    @GetMapping("/flaight")
    public List<flaight> getAllflaight() {
        return apiService.getAllflaight();
    }
    @GetMapping("/hotel")
    public List<Hotel> getAllhotel() {
        return apiService.getAllhotel();
    }
    @GetMapping("/kanniyakumari")
    public List<kanniyakumari> getAllkanniyakumari() {
        return apiService.getAllkanniyakumari();
    }
    @GetMapping("/madurai")
    public List<madurai> getAllmadurai() {
        return apiService.getAllmadurai();
    }
    @GetMapping("/train")
    public List<train> getAlltrain() {
        return apiService.getAlltrain();
    }
    @GetMapping("/covai")
    public List<covai> getAllcovai() {
        return apiService.getAllcovai();
    }
    
//    
//    @GetMapping("/{email}")
//    public model getStudentByEmail(@PathVariable String email) {
//        return apiService.getStudentByEmail(email);
//    }
    
    //post for 14 tables
    
    @PostMapping("/post")
    public boolean createStudent(@RequestBody model m) {
        return apiService.createStudent(m);
    }
    @PostMapping("/posthotel")
    public boolean createhotelform(@RequestBody Hotel m) {                                
        return apiService.createhotelform(m);
    }
    @PostMapping("/postmadurai")
    public boolean maduraionedaytrip(@RequestBody madurai m) {
    	return apiService.maduraionedaytrip(m);
    }
    @PostMapping("/postchennai")
    public boolean chennaionedaytrip(@RequestBody chennai c) {
    	return apiService.chennaionedaytrip(c);
    }   
    
    @PostMapping("/postcovai")
    public boolean covaionedaytrip(@RequestBody covai co) {
    	return apiService.covaionedaytrip(co);
    }

    @PostMapping("/postkanniyakumari")
    public boolean kanniyakumarionedaytrip(@RequestBody kanniyakumari kk) {
    	return apiService.kanniyakumarionedaytrip(kk);
    }
    @PostMapping("/posteducation")
    public boolean educationonedaytrip(@RequestBody education ed) {
    	return apiService.educationonedaytrip(ed);
    }
    @PostMapping("/postfamily")
    public boolean familyonedaytrip(@RequestBody family fy) {
    	return apiService.familyonedaytrip(fy);
    }
    @PostMapping("/postchildren")
    public boolean childrenonedaytrip(@RequestBody children cn) {
    	return apiService.childrenonedaytrip(cn);
    }
    @PostMapping("/postbus")
    public boolean busticket(@RequestBody bus bus) {
    	return apiService.busticket(bus);
    }
    @PostMapping("/posttrain")
    public boolean trainticket(@RequestBody train tr) {
    	return apiService.trainticket(tr);
    }
    @PostMapping("/postflaight")
    public boolean flaightticket(@RequestBody flaight flg) {
    	return apiService.flaightticket(flg);
    }
    @PostMapping("/postcar")
    public boolean carticket(@RequestBody car car) {
    	return apiService.carticket(car);
    }
    @PostMapping("/postfeedback")
    public boolean feedback1(@RequestBody feedback fb) {
   	return apiService.feedback1(fb);
   }
    
    
    
    
    
    
    
    //put for 14 tables;
 //   @PutMapping("/{email}")
//    public model regform( @RequestBody model model,@PathVariable String email) {
//        return apiService.regform(email, model);
//    }
    
//    @PutMapping("/bus/{email}")
//    public bus busupdate( @RequestBody bus bus,@PathVariable String email) {
//        return apiService.busupdate(email, bus);
//   }
//    
//    @PutMapping("/{email}")
//    public model updateStudent( @RequestBody model model,@PathVariable String email) {
//        return apiService.updateStudent(email, model);
//    }
//    @PutMapping("/{email}")
//    public model updateStudent( @RequestBody model model,@PathVariable String email) {
//        return apiService.updateStudent(email, model);
//    }
//    @PutMapping("/{email}")
//    public model updateStudent( @RequestBody model model,@PathVariable String email) {
//        return apiService.updateStudent(email, model);
//    }
//    @PutMapping("/{email}")
//    public model updateStudent( @RequestBody model model,@PathVariable String email) {
//        return apiService.updateStudent(email, model);
//    }
//    @PutMapping("/{email}")
//    public model updateStudent( @RequestBody model model,@PathVariable String email) {
//        return apiService.updateStudent(email, model);
//    }
//    @PutMapping("/{email}")
//    public model updateStudent( @RequestBody model model,@PathVariable String email) {
//        return apiService.updateStudent(email, model);
//    }
//    @PutMapping("/{email}")
//    public model updateStudent( @RequestBody model model,@PathVariable String email) {
//        return apiService.updateStudent(email, model);
//    }
//    @PutMapping("/{email}")
//    public model updateStudent( @RequestBody model model,@PathVariable String email) {
//        return apiService.updateStudent(email, model);
//    }
//    @PutMapping("/{email}")
//    public model updateStudent( @RequestBody model model,@PathVariable String email) {
//        return apiService.updateStudent(email, model);
//    }
//    @PutMapping("/{email}")
//    public model updateStudent( @RequestBody model model,@PathVariable String email) {
//        return apiService.updateStudent(email, model);
//    }
//    @PutMapping("/{email}")
//    public model updateStudent( @RequestBody model model,@PathVariable String email) {
//        return apiService.updateStudent(email, model);
//    }
//    @PutMapping("/{email}")
//    public model updateStudent( @RequestBody model model,@PathVariable String email) {
//        return apiService.updateStudent(email, model);
//    }
//    
    
    //delete for 14 tables;
    @DeleteMapping("/deletereg/{email}")
    public boolean deletereg(@PathVariable String email) {
       return apiService.deletereg(email);
    }
    @DeleteMapping("/deletebus/{email}")
    public boolean deletebus(@PathVariable String email) {
        return apiService.deletebus(email);
     }
    @DeleteMapping("/deletecar/{email}")
    public boolean deletecar(@PathVariable String email) {
        return apiService.deletecar(email);
     }
    @DeleteMapping("/deletechennai/{email}")
    public boolean deletechennai(@PathVariable String email) {
        return apiService.deletechennai(email);
     }
    @DeleteMapping("/deletechildren/{email}")
    public boolean deletechildren(@PathVariable String email) {
        return apiService.deletechildren(email);
     }
    @DeleteMapping("/deletecovai/{email}")
    public boolean deletecovai(@PathVariable String email) {
        return apiService.deletecovai(email);
     }
    @DeleteMapping("/deleteeducation/{email}")
    public boolean deleteeducation(@PathVariable String email) {
        return apiService.deleteeducation(email);
     }
    @DeleteMapping("/deletefamily/{email}")
    public boolean deletefamily(@PathVariable String email) {
        return apiService.deletefamily(email);
     }
    @DeleteMapping("/deletefeedback/{email}")
    public boolean deletefeedback(@PathVariable String email) {
        return apiService.deletefeedback(email);
     }
    @DeleteMapping("/deleteflaight/{email}")
    public boolean deleteflaight(@PathVariable String email) {
        return apiService.deleteflaight(email);
     }
    @DeleteMapping("/deletehotel/{email}")
    public boolean deletehotel(@PathVariable String email) {
        return apiService.deletehotel(email);
     }
    @DeleteMapping("/deletekanniyakumari/{email}")
    public boolean deletekanniyakumari(@PathVariable String email) {
        return apiService.deletekanniyakumari(email);
     }
    @DeleteMapping("/deletemadurai/{email}")
    public boolean deletemadurai(@PathVariable String email) {
        return apiService.deletemadurai(email);
     }
    @DeleteMapping("/deletetrain/{email}")
    public boolean deletetrain(@PathVariable String email) {
        return apiService.deletetrain(email);
     }
    
    @GetMapping("/{city}")
    public ResponseEntity<String> getCurrentWeather(@PathVariable String city) {
        try {
            String weatherInfo = weatherService.getCurrentWeather(city);
            return new ResponseEntity<>(weatherInfo, HttpStatus.OK);
        } catch (IOException e) {
            String errorMessage = "Failed to retrieve weather information for " + city;
            return new ResponseEntity<>(errorMessage, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

