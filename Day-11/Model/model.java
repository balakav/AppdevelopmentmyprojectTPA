
package com.example.bala.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name ="regform")
public class model {
    @Id
    private String email;
    private String name;
    private String password;
    private String confirmpassword;
    
   
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getConfirmpassword() {
		return confirmpassword;
	}
	public void setConfirmpassword(String confirmpassword) {
		this.confirmpassword = confirmpassword;
	}
	public model(String email, String name, String password,String Confirmpassword) {
        this.email = email;
        this.name = name;
        this.password = password;
        this.confirmpassword=Confirmpassword;
    }
    public model()
    {
    }
}