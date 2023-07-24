package com.example.bala.Model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import java.sql.Date;
import java.sql.Time;
@Entity
@Table(name="Hotel")
public class Hotel {

//	@OneToOne(cascade = CascadeType.ALL)
//	@JoinColumn(name = "email")
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int hid;
	private String email;
	 private String hotelname;
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
	 private java.sql.Date ddate;
	 private String dtime;
	 private int noa;
	 private int nok;
	 private String dyhasr;


	public int getHid() {
		return hid;
	}


	public void setHid(int hid) {
		this.hid = hid;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getHotelname() {
		return hotelname;
	}


	public void setHotelname(String hotelname) {
		this.hotelname = hotelname;
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


	public java.sql.Date getDdate() {
		return ddate;
	}


	public void setDdate(java.sql.Date ddate) {
		this.ddate = ddate;
	}


	public String getDtime() {
		return dtime;
	}


	public void setDtime(String dtime) {
		this.dtime = dtime;
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


	public Hotel(int hid, String email, String hotelname, String fname, String lname, String address, String address2,
			String city, String state1, String country, String phoneno, Date adate, String atime, Date ddate,
			String dtime, int noa, int nok, String dyhasr) {
		super();
		this.hid = hid;
		this.email = email;
		this.hotelname = hotelname;
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
		this.ddate = ddate;
		this.dtime = dtime;
		this.noa = noa;
		this.nok = nok;
		this.dyhasr = dyhasr;
	}


	public Hotel() {
		 
	 }
}
