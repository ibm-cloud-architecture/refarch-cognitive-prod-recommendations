package com.ibm.cloud.refarch.wcs.model;

public class Recommendation {
	private String customerId;
	private Product bestRecommended1st;
	private Product recommendedProduct;
	private Offer offer; 
	
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
	public Product getRecommendedProduct() {
		return recommendedProduct;
	}
	public void setRecommendedProduct(Product recommendedProduct) {
		this.recommendedProduct = recommendedProduct;
	}
	public Offer getOffer() {
		return offer;
	}
	public void setOffer(Offer offer) {
		this.offer = offer;
	}
		
	
}
