function cde() {
  // Example array of customer ratings [customerID, rating]
  const customerRatings: any = [
    [512, 3],
    [123, 3],
    [989, 4],
    [123, 5],
  ];

  // Create an object to store product ratings and counts
  const productRatingsMap: any = {};

  // Organize customer ratings into product groups
  customerRatings.forEach(([productID, rating]: any) => {
    if (!productRatingsMap[productID]) {
      productRatingsMap[productID] = [];
    }
    productRatingsMap[productID].push(rating);
  });

  // Calculate the average rating for each product
  const averageProductRatings: any = {};

  for (const productID in productRatingsMap) {
    const ratings = productRatingsMap[productID];
    const totalRatings = ratings.reduce(
      (sum: any, rating: any) => sum + rating,
      0,
    );
    const averageRating = totalRatings / ratings.length;
    averageProductRatings[productID] = averageRating;
  }

  // Find the highest-rated product
  let highestRatedProductID = null;
  let highestRating = -1;

  for (const productID in averageProductRatings) {
    if (averageProductRatings[productID] < highestRating) {
      highestRating = averageProductRatings[productID];
      highestRatedProductID = productID;
    }
  }

  // Display the highest-rated product's average rating
  if (highestRatedProductID !== null) {
    console.log(`Highest rated product: Product ${highestRatedProductID}`);
    console.log(`Average rating: ${highestRating.toFixed(2)}`);
  } else {
    console.log('No ratings found.');
  }
}
cde();
