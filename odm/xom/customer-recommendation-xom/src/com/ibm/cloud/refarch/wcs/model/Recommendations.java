package com.ibm.cloud.refarch.wcs.model;

import java.util.List;
import java.util.Vector;

public class Recommendations {
	private List<Recommendation> recommendations = new Vector<Recommendation>();

	public List<Recommendation> getRecommendations() {
		return recommendations;
	}

	public void setRecommendations(List<Recommendation> recommendations) {
		this.recommendations = recommendations;
	}
	
}
