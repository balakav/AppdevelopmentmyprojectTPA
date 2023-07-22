package com.example.bala.Model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class feedback {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int feedbackid;
	private String email;
	 private String fname;
	 private String lname;
	 private String address;
	 private int rating;
	 private String wdyhim;
	public int getFeedbackid() {
		return feedbackid;
	}
	public void setFeedbackid(int feedbackid) {
		this.feedbackid = feedbackid;
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
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	public String getWdyhim() {
		return wdyhim;
	}
	public void setWdyhim(String wdyhim) {
		this.wdyhim = wdyhim;
	}
	public feedback(int feedbackid, String email, String fname, String lname, String address, int rating,
			String wdyhim) {
		super();
		this.feedbackid = feedbackid;
		this.email = email;
		this.fname = fname;
		this.lname = lname;
		this.address = address;
		this.rating = rating;
		this.wdyhim = wdyhim;
	}
	 public feedback() {
		 
	 }
}
