package com.example.bala.Model;

import java.sql.Date;
import java.sql.Time;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="education")
public class education {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int eid;
	private String email;
	 private String fname;
	 private String lname;
	 private String address;
	 private String address2;
	 private String city;
	 private String state1;
	 private String country;
	 private String phoneno;
	 private Date adate;
	 private Time atime;
	 private int noa;
	 private int nok;
	 private String dyhasr;
	 
	public int getEid() {
		return eid;
	}
	public void setEid(int eid) {
		this.eid = eid;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getAddress2() {
		return address2;
	}
	public void setAddress2(String address2) {
		this.address2 = address2;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState1() {
		return state1;
	}
	public void setState1(String state1) {
		this.state1 = state1;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getPhoneno() {
		return phoneno;
	}
	public void setPhoneno(String phoneno) {
		this.phoneno = phoneno;
	}
	public Date getAdate() {
		return adate;
	}
	public void setAdate(Date adate) {
		this.adate = adate;
	}
	public Time getAtime() {
		return atime;
	}
	public void setAtime(Time atime) {
		this.atime = atime;
	}
	public int getNoa() {
		return noa;
	}
	public void setNoa(int noa) {
		this.noa = noa;
	}
	public int getNok() {
		return nok;
	}
	public void setNok(int nok) {
		this.nok = nok;
	}
	public String getDyhasr() {
		return dyhasr;
	}
	public void setDyhasr(String dyhasr) {
		this.dyhasr = dyhasr;
	}
	public education(int eid,String email, String fname, String lname, String address, String address2, String city,
			String state1, String country, String phoneno, Date adate, Time atime, int noa, int nok, String dyhasr) {
		super();
		this.eid=eid;
		this.email = email;
		this.fname = fname;
		this.lname = lname;
		this.address = address;
		this.address2 = address2;
		this.city = city;
		this.state1 = state1;
		this.country = country;
		this.phoneno = phoneno;
		this.adate = adate;
		this.atime = atime;
		this.noa = noa;
		this.nok = nok;
		this.dyhasr = dyhasr;
	}
	public education() {
		
	}
	 
}
