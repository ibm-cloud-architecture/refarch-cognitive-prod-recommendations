package com.ibm.cloud.refarch.wcs.model;

public class CustomerProfile {
	private String name;
	private int ageGrouping;
	private int incomeGrouping;
	
	public CustomerProfile() {
		super();
	}

	
	public static final CustomerProfile Student = new CustomerProfile("Student",0,-1);
	public static final CustomerProfile Adult = new CustomerProfile("Adult",1,-1);
	public static final CustomerProfile Retired = new CustomerProfile("Student",2,-1);

	
	public CustomerProfile(String name, int ageGrouping, int incomeGrouping) {
		super();
		this.name = name;
		this.ageGrouping = ageGrouping;
		this.incomeGrouping = incomeGrouping;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public int getAgeGrouping() {
		return ageGrouping;
	}


	public void setAgeGrouping(int ageGrouping) {
		this.ageGrouping = ageGrouping;
	}


	public int getIncomeGrouping() {
		return incomeGrouping;
	}


	public void setIncomeGrouping(int incomeGrouping) {
		this.incomeGrouping = incomeGrouping;
	}


	@Override
	public String toString() {
		return "CustomerProfile [name=" + name + ", ageGrouping=" + ageGrouping
				+ ", incomeGrouping=" + incomeGrouping + "]";
	}
	

}
