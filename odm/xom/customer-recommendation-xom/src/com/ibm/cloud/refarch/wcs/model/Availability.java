package com.ibm.cloud.refarch.wcs.model;

import java.util.List;
import java.util.Vector;

public class Availability {
	private String zipCode;
	private List<String> productCategories = new Vector<String>();
	
	public String getZipCode() {
		return zipCode;
	}
	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}
	public List<String> getProductCategories() {
		return productCategories;
	}
	public void setProductCategories(List<String> productCategories) {
		this.productCategories = productCategories;
	}
	
	public void addProductCategories(String productCategories)
	{
		String[] pcks = productCategories.split(",");
		for (int i=0; i<pcks.length;i++)
		{
			String pck = pcks[i].trim();
			this.productCategories.add(pck);
		}
	}
	public void removeProductCategories(String productCategories)
	{
		String[] pcks = productCategories.split(",");
		for (int i=0; i<pcks.length;i++)
		{
			String pck = pcks[i].trim();
			this.productCategories.remove(pck);
		}
	}
	
}
