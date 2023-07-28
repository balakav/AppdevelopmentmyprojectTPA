package com.example.bala.Model;


import java.sql.Time;
import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="family")
public class family {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int fid;
	private String email;
	 private String fname;
	 private String lname;
	 private String address;
	 private String address2;
	 private String city;
	 private String state1;
	 private String country;
	 private String phoneno;
	 private java.sql.Date adate;
	 private String atime;
	 private int noa;
	 private int nok;
	 private String dyhasr;
	 
	
	public int getFid() {
		return fid;
	}


	public void setFid(int fid) {
		this.fid = fid;
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


	public java.sql.Date getAdate() {
		return adate;
	}


	public void setAdate(java.sql.Date adate) {
		this.adate = adate;
	}


	public String getAtime() {
		return atime;
	}


	public void setAtime(String atime) {
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


	public family(int fid, String email, String fname, String lname, String address, String address2, String city,
			String state1, String country, String phoneno, java.sql.Date adate, String atime, int noa, int nok,
			String dyhasr) {
		super();
		this.fid = fid;
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


	public family() {
		
	}
	 
}
