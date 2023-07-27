package com.example.bala.Model;

import java.sql.Date;
import java.sql.Time;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="Bus")
public class bus {
        @Id
        @GeneratedValue(strategy=GenerationType.AUTO)
        private int busid;
        private String name;
        private int age;
        private String genter;
        private String startplace;
        private String endplace;
        private String bustype;
        private String seattype;
        private java.sql.Date startdate;
        private String starttime;
        private java.sql.Date enddate;
        private String endtime;
        // private java.sql.Date adate;  private String atime;
		
        public bus() {
        	
        }

		public int getBusid() {
			return busid;
		}

		public void setBusid(int busid) {
			this.busid = busid;
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

		public String getBustype() {
			return bustype;
		}

		public void setBustype(String bustype) {
			this.bustype = bustype;
		}

		public String getSeattype() {
			return seattype;
		}

		public void setSeattype(String seattype) {
			this.seattype = seattype;
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

		public bus(int busid, String name, int age, String genter, String startplace, String endplace, String bustype,
				String seattype, Date startdate, String starttime, Date enddate, String endtime) {
			super();
			this.busid = busid;
			this.name = name;
			this.age = age;
			this.genter = genter;
			this.startplace = startplace;
			this.endplace = endplace;
			this.bustype = bustype;
			this.seattype = seattype;
			this.startdate = startdate;
			this.starttime = starttime;
			this.enddate = enddate;
			this.endtime = endtime;
		}
        
}
