package com.ibm.cloud.refarch.wcs.model;

public class Recommendation {
	private String customerId;
	private Product bestRecommended1st;
	private Product bestRecommended2nd;
	
	public String getCustomerId() {
		return customerId;
	}
	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}
	public Product getBestRecommended1st() {
		return bestRecommended1st;
	}
	public void setBestRecommended1st(Product bestRecommended1st) {
		this.bestRecommended1st = bestRecommended1st;
	}
	public Product getBestRecommended2nd() {
		return bestRecommended2nd;
	}
	public void setBestRecommended2nd(Product bestRecommended2nd) {
		this.bestRecommended2nd = bestRecommended2nd;
	}
	
	
}
