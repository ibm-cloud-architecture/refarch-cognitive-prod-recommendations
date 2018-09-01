package com.ibm.cloud.refarch.wcs.model;

public class Product {
	private String name;
	private String packageName;
	private String productCategory;
	private int monthlyUsage;
	private int downloadSpeed;
	
	private double price;

	public static final Product ADSL = new Product("ADSL","ADSL",25.00);
	public static final Product FIBRE25 = new Product("FIBRE25","FIBRE", 25.00);
	public static final Product FIBRE30 = new Product("FIBRE30","FIBRE", 30.00);
	public static final Product IPTV10 = new Product("IPTV10","IPTV", 60.00);
	public static final Product IPTV50 = new Product("IPTV50","IPTV", 80.00);
	public static final Product IPTV100 = new Product("IPTV100","IPTV", 100.00);
	public static final Product CABLE10 = new Product("CABLE10","CABLE", 60.00);
	public static final Product CABLE50 = new Product("CABLE50","CABLE", 80.00);
	public static final Product CABLE100 = new Product("CABLE100","CABLE", 100.00);
	public static final Product PARTNER_SATELLITE = new Product("PARTNER_SATELLITE","TV", 100.00);
	public static final Product PHONE = new Product("PHONE","PHONE", 10.00);
	public static final Product VOIP = new Product("VOIP","PHONE", 10.00);
	
	public Product() {
		super();
	}
	
	public Product(String packageName, String productCategory, double price) {
		super();
		this.packageName = packageName;
		this.productCategory = productCategory;
		this.price = price;
	}

	public String getPackageName() {
		return packageName;
	}

	public void setPackageName(String packageName) {
		this.packageName = packageName;
	}

	public String getProductCategory() {
		return productCategory;
	}

	public void setProductCategory(String productCategory) {
		this.productCategory = productCategory;
	}

	public int getMonthlyUsage() {
		return monthlyUsage;
	}

	public void setMonthlyUsage(int monthlyUsage) {
		this.monthlyUsage = monthlyUsage;
	}

	public int getDownloadSpeed() {
		return downloadSpeed;
	}

	public void setDownloadSpeed(int downloadSpeed) {
		this.downloadSpeed = downloadSpeed;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
/**	
	public static Product FindProduct(String packageName)
	{
		if (packageName.equals("ADSL")) return ADSL;
		if (packageName.equals("FIBRE")) return FIBRE;
		
		Product result = new Product();
		result.setPackageName(packageName);
		return result;
	}
*/
}
