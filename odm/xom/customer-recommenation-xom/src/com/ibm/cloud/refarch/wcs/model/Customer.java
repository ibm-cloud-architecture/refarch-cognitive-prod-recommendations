package com.ibm.cloud.refarch.wcs.model;

public class Customer {
	private String id;
	private String name;
	private int age;
	private String previousZipCode;
	private String newZipCode;
	
	private Product existingProduct;
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
	public Product getExistingProduct() {
		return existingProduct;
	}
	public void setExistingProduct(Product existingProduct) {
		this.existingProduct = existingProduct;
	}
	public CustomerProfile getProfile() {
		return profile;
	}
	public void setProfile(CustomerProfile profile) {
		this.profile = profile;
	}
	
	
	
}
