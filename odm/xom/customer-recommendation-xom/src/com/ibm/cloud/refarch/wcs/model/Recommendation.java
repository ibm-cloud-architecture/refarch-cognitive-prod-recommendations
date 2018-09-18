package com.ibm.cloud.refarch.wcs.model;

import java.util.ArrayList;
import java.util.List;

public class Recommendation {
	private String customerId;
	private List<Product> bestRecommended1st = new ArrayList<Product>();
	private double totalPrice;
	private double discountPercent;
	private String bundleName="";
	
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
	
	
	
	public String getBundleName() {
		return bundleName;
	}
	public void setBundleName(String bundleName) {
		this.bundleName = bundleName;
	}
	public double calculateTotalPrice(){
		double totalPrice = 0.0;
		for (Product product : bestRecommended1st) {
			totalPrice = totalPrice + product.getPrice();
		}
		totalPrice = totalPrice*(1.0-discountPercent);
		return totalPrice;
	}
	
	public String internetSubscriptionProductCategory(){
		String internetSubscription = "";
		for (Product product : bestRecommended1st) {
			if((product.getProductCategory() == "ADSL") || (product.getProductCategory() == "FIBRE")  ){
				internetSubscription = product.getProductCategory();
			}
		}

		return internetSubscription;
	}
	
	public double internetSubscriptionPrice(){
		double price = 0.0;
		for (Product product : bestRecommended1st) {
			if((product.getProductCategory() == "ADSL") || (product.getProductCategory() == "FIBRE")  ){
				price = product.getPrice();
			}
		}

		return price;
	}
	
	public String tvSubscriptionProductCategory(){
		String tvSubscription = "";
		for (Product product : bestRecommended1st) {
			if((product.getProductCategory() == "IPTV") || (product.getProductCategory() == "CABLE")  || (product.getProductCategory() == "PARTNER_SATELLITE")){
				tvSubscription = product.getProductCategory();
			}
		}

		return tvSubscription;
	}
	
	public double tvSubscriptionPrice(){
		double price = 0.0;
		for (Product product : bestRecommended1st) {
			if((product.getProductCategory() == "IPTV") || (product.getProductCategory() == "CABLE")  || (product.getProductCategory() == "PARTNER_SATELLITE")){
				price = product.getPrice();
			}
		}

		return price;
	}
	
	public String phoneSubscriptionProductCategory(){
		String phoneSubscription = "";
		for (Product product : bestRecommended1st) {
			if((product.getProductCategory() == "PHONE") || (product.getProductCategory() == "VOIP")  ){
				phoneSubscription = product.getProductCategory();
			}
		}

		return phoneSubscription;
	}
	
	public double phoneSubscriptionPrice(){
		double price = 0.0;
		for (Product product : bestRecommended1st) {
			if((product.getProductCategory() == "PHONE") || (product.getProductCategory() == "VOIP")  ){
				price = product.getPrice();
			}
		}

		return price;
	}
	
	
	@Override
	public String toString() {
		return "Recommendation [customerId=" + customerId
				+ ", bestRecommended1st=" + bestRecommended1st
				+ ", totalPrice=" + totalPrice + ", discountPercent="
				+ discountPercent + ", bundleName=" + bundleName
				+ ", internetSubscriptionProductCategory="
				+ internetSubscriptionProductCategory()
				+ ", internetSubscriptionPrice="
				+ internetSubscriptionPrice()
				+ ", tvSubscriptionProductCategory="
				+ tvSubscriptionProductCategory() + ", tvSubscriptionPrice="
				+ tvSubscriptionPrice()
				+ ", phoneSubscriptionProductCategory="
				+ phoneSubscriptionProductCategory()
				+ ", phoneSubscriptionPrice=" + phoneSubscriptionPrice()
				+ "]";
	}
	
	
	
}
