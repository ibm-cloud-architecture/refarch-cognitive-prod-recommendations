package com.ibm.cloud.refarch.wcs.model;

import java.util.Arrays;
import java.util.List;

public class Bundle extends Product {
	
	private String name; 
	private List<Product> products ;
/**
 * Commented out to allow bundle definitions in decision tables instead

	public static final Bundle TRIPLEPLAY1 = new Bundle("Triple Play",Arrays.asList(Product.VOIP,FIBRE25,IPTV10));
	public static final Bundle TRIPLEPLAY2 = new Bundle("Triple Play",Arrays.asList(VOIP,FIBRE25,IPTV50));
	public static final Bundle TRIPLEPLAY3 = new Bundle("Triple Play",Arrays.asList(VOIP,FIBRE30,IPTV100));
	public static final Bundle INTERNETTV1 = new Bundle("Basic Internet & TV",Arrays.asList(FIBRE25,CABLE10));
	public static final Bundle INTERNETTV2 = new Bundle("Basic Internet & TV",Arrays.asList(FIBRE25,CABLE50));
	public static final Bundle INTERNETTV3 = new Bundle("Basic Internet & TV",Arrays.asList(FIBRE25,CABLE100));
	public static final Bundle INTERNETTV4 = new Bundle("Basic Internet & TV",Arrays.asList(FIBRE25,CABLE10));
	public static final Bundle INTERNETTV5 = new Bundle("Basic Internet & TV",Arrays.asList(FIBRE25,CABLE50));
	public static final Bundle INTERNETTV6 = new Bundle("Basic Internet & TV",Arrays.asList(FIBRE25,CABLE100));
 */	
	public Bundle(String name, List<Product> products) {
		super();
		this.name = name;
		this.products = products;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}
	
	public static Bundle createBundle(String name, Product[] products) {
		// do error handling
		
		Bundle bundle = new Bundle(name, Arrays.asList(products));
		return bundle;
	}

	@Override
	public String toString() {
		return "Bundle [name=" + name + ", products=" + products + "]";
	}
	
}
