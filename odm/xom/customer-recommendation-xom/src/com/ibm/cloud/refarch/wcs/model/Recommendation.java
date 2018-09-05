package com.ibm.cloud.refarch.wcs.model;

import java.util.ArrayList;
import java.util.List;

public class Recommendation {
	private String customerId;
	private List<Product> bestRecommended1st = new ArrayList<Product>();
	private double totalPrice;
	private double discountPercent;
	
	public String getCustomerId() {
		return customerId;
	}
	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}
	public List<Product> getBestRecommended1st() {
		return bestRecommended1st;
	}
	public void setBestRecommended1st(List<Product> bestRecommended1st) {
		this.bestRecommended1st = bestRecommended1st;
	}
	public double getTotalPrice() {
		return totalPrice;
	}
	public void setTotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
	}
	public double getDiscountPercent() {
		return discountPercent;
	}
	public void setDiscountPercent(double discountPercent) {
		this.discountPercent = discountPercent;
	}
	
	public double calculateTotalPrice(){
		double totalPrice = 0.0;
		for (Product product : bestRecommended1st) {
			totalPrice = totalPrice + product.getPrice();
		}
		totalPrice = totalPrice*(1.0-discountPercent);
		return totalPrice;
	}
	
}
