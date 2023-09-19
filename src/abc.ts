function abc() {
  // Example array of customer ratings [customerID, rating]
  const customerRatings = [
    [512, 3],
    [123, 3],
    [989, 4],
    [123, 5],
  ];

  // Create an object to store product ratings and counts
  const productRatingsMap: any = {};

  // Organize customer ratings into product groups
  customerRatings.forEach(([customerID, rating]) => {
    if (!productRatingsMap[customerID]) {
      productRatingsMap[customerID] = [];
    }
    productRatingsMap[customerID].push(rating);
  });
  console.log('productRatingsMap: ', productRatingsMap);

  // Calculate the average rating for each product
  const averageProductRatings: any = {};

  for (const productID in productRatingsMap) {
    const ratings: any = productRatingsMap[productID];
    const totalRatings = ratings.reduce(
      (sum: any, rating: any) => sum + rating,
      0,
    );
    const averageRating = totalRatings / ratings.length;
    averageProductRatings[productID] = averageRating;
  }

  // Display the average rating for each product
  for (const productID in averageProductRatings) {
    console.log(
      `Product ${productID} average rating: ${averageProductRatings[
        productID
      ].toFixed(2)}`,
    );
  }
}
abc();
