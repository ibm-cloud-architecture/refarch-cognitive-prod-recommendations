# Product Recommendation Rule explanation


## Introduction

The product recommendation decision services address the scenario in which an existing customer would like to move to a new address. The products available at the new address may not be the same ones available at the current address. The decision service will recommend a new set of products for the customer based on their existing products, their new location, and the customer churn or the possibility that this customer might leave to another company that has better prices or a product set that better fits their needs. 

## Rule flow
The high level steps or tasks needed to make the decision are captured in the ruleflow diagram below
![alt text](https://github.com/ibm-cloud-architecture/refarch-cognitive-prod-recommendations/tree/master/docs/ruleflow.png "Main Recommendations Ruleflow")

## Bundle Definition
In the first task we define the concept of a Bundle. A Bundle is a set of related products with some special features when combined, for example special pricing for purchasing all the products in the Bundle. The decision table, pictured below, allows the business user to define the Bundles independently of the main product database and to control these product offerings. 
![alt text](https://github.com/ibm-cloud-architecture/refarch-cognitive-prod-recommendations/tree/master/docs/bunde-definition.png "Bundle Definition")
In the action part of the rule, the Bundle is created and inserted into working memory. As we will see later, they are subsequently used to  determine a discount amount for customers who purchase the Bundle.

## Product Availability
The product availability rules simply tell for each zip code which products are available in that area. Since the telecom company offers Phone, TV, and Internet products, there is describing the availability by zip code for the products in each of these categories. Of particular interest here for some of the recommendation scenarios, when the customer moves to an area where the company does not offer a TV product, the rules automatically recommend that the customer partner with a satellite company. 
![alt text](https://github.com/ibm-cloud-architecture/refarch-cognitive-prod-recommendations/tree/master/docs/product-availability.png "Product Availability")

## Product Removal 
With a baseline set of available products from which to choose, the next step is to remove any products from consideration that will not be a good match. In particular, IPTV, one of the TV offerings, is only recommended if the customer has sufficiently fast internet. The rule says, if they have ADSL, the slowest internet, do not recommend IPTV for this customer. 
![alt text](https://github.com/ibm-cloud-architecture/refarch-cognitive-prod-recommendations/tree/master/docs/product-removal.png "Product Removal")

## Customer Profiling


## Product Recommendation

## Price Calculation
