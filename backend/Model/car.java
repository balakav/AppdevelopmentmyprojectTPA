package com.example.bala.Model;

import java.sql.Date;
import java.sql.Time;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="car")
public class car {
	 @Id
     @GeneratedValue(strategy=GenerationType.AUTO)
     private int carid;
     private String name;
     private int age;
     private String genter;
     private String startplace;
     private String endplace;
     private String cartype;
     private java.sql.Date startdate;
     private String  starttime;
     private java.sql.Date enddate;
     private String endtime;
	
	public int getCarid() {
		return carid;
	}

	public void setCarid(int carid) {
		this.carid = carid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getGenter() {
		return genter;
	}

	public void setGenter(String genter) {
		this.genter = genter;
	}

	public String getStartplace() {
		return startplace;
	}

	public void setStartplace(String startplace) {
		this.startplace = startplace;
	}

	public String getEndplace() {
		return endplace;
	}

	public void setEndplace(String endplace) {
		this.endplace = endplace;
	}

	public String getCartype() {
		return cartype;
	}

	public void setCartype(String cartype) {
		this.cartype = cartype;
	}

	public java.sql.Date getStartdate() {
		return startdate;
	}

	public void setStartdate(java.sql.Date startdate) {
		this.startdate = startdate;
	}

	public String getStarttime() {
		return starttime;
	}

	public void setStarttime(String starttime) {
		this.starttime = starttime;
	}

	public java.sql.Date getEnddate() {
		return enddate;
	}

	public void setEnddate(java.sql.Date enddate) {
		this.enddate = enddate;
	}

	public String getEndtime() {
		return endtime;
	}

	public void setEndtime(String endtime) {
		this.endtime = endtime;
	}

	public car(int carid, String name, int age, String genter, String startplace, String endplace, String cartype,
			Date startdate, String starttime, Date enddate, String endtime) {
		super();
		this.carid = carid;
		this.name = name;
		this.age = age;
		this.genter = genter;
		this.startplace = startplace;
		this.endplace = endplace;
		this.cartype = cartype;
		this.startdate = startdate;
		this.starttime = starttime;
		this.enddate = enddate;
		this.endtime = endtime;
	}

	public car() {
		
	}
     
}
