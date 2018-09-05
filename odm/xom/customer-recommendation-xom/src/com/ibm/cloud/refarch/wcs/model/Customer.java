package com.ibm.cloud.refarch.wcs.model;

import java.util.List;

public class Customer {
	private String id;
	private String name;
	private String firstName;
	private String lastName;
	private String emailAddress;

	private int age;
	private String gender;
	private String type;
	private String status;
	private int children;
	private int estimatedIncome;
	
	private String previousZipCode;
	private String newZipCode;
	private boolean carOwner;
	private String profession;
	private double churn;
	private String maritalStatus;
	
	private List<Product> existingProducts;
	private CustomerProfile profile;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
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
	public String getPreviousZipCode() {
		return previousZipCode;
	}
	public void setPreviousZipCode(String previousZipCode) {
		this.previousZipCode = previousZipCode;
	}
	public String getNewZipCode() {
		return newZipCode;
	}
	public void setNewZipCode(String newZipCode) {
		this.newZipCode = newZipCode;
	}
	public List<Product> getExistingProducts() {
		return existingProducts;
	}
	public void setExistingProducts(List<Product> existingProducts) {
		this.existingProducts = existingProducts;
	}
	public CustomerProfile getProfile() {
		return profile;
	}
	public void setProfile(CustomerProfile profile) {
		this.profile = profile;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmailAddress() {
		return emailAddress;
	}
	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public int getChildren() {
		return children;
	}
	public void setChildren(int children) {
		this.children = children;
	}
	public int getEstimatedIncome() {
		return estimatedIncome;
	}
	public void setEstimatedIncome(int estimatedIncome) {
		this.estimatedIncome = estimatedIncome;
	}
	public boolean isCarOwner() {
		return carOwner;
	}
	public void setCarOwner(boolean carOwner) {
		this.carOwner = carOwner;
	}
	public String getProfession() {
		return profession;
	}
	public void setProfession(String profession) {
		this.profession = profession;
	}
	public double getChurn() {
		return churn;
	}
	public void setChurn(double churn) {
		this.churn = churn;
	}
	public String getMaritalStatus() {
		return maritalStatus;
	}
	public void setMaritalStatus(String maritalStatus) {
		this.maritalStatus = maritalStatus;
	}
	
	
	
}
