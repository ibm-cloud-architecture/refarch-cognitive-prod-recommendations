package com.ibm.cloud.refarch.wcs.model;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.Vector;

public class Offer {
	private Date starDate;
	private Date endDate;
	private BigDecimal discount;
	private List<String> eligibleProducts = new Vector<String>();
	private Integer contractTermMonths;
	public Date getStarDate() {
		return starDate;
	}
	public void setStarDate(Date starDate) {
		this.starDate = starDate;
	}
	public Date getEndDate() {
		return endDate;
	}
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	public BigDecimal getDiscount() {
		return discount;
	}
	public void setDiscount(BigDecimal discount) {
		this.discount = discount;
	}
	
	public List<String> getEligibleProducts() {
		return eligibleProducts;
	}
	public void setEligibleProducts(List<String> eligibleProducts) {
		this.eligibleProducts = eligibleProducts;
	}
	public Integer getContractTermMonths() {
		return contractTermMonths;
	}
	public void setContractTermMonths(Integer contractTermMonths) {
		this.contractTermMonths = contractTermMonths;
	}
	
	   
}
