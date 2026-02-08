#!/bin/bash

# Script to download placeholder images for testing the photography website
# Uses picsum.photos for high-quality placeholder images

echo "Downloading placeholder images for photography website..."

# Create directories if they don't exist
mkdir -p public/photos/categories
mkdir -p public/photos/sport
mkdir -p public/photos/wildlife
mkdir -p public/photos/travel
mkdir -p public/photos/about

# Download hero image (landscape)
echo "Downloading hero image..."
curl -L "https://picsum.photos/1920/1080" -o public/photos/hero.jpg

# Download profile image (square)
echo "Downloading profile image..."
curl -L "https://picsum.photos/800/800" -o public/photos/about/profile.jpg

# Download category cover images (landscape)
echo "Downloading category covers..."
curl -L "https://picsum.photos/1200/800?random=1" -o public/photos/categories/sport.jpg
curl -L "https://picsum.photos/1200/800?random=2" -o public/photos/categories/wildlife.jpg
curl -L "https://picsum.photos/1200/800?random=3" -o public/photos/categories/travel.jpg

# Download sport gallery images (portrait)
echo "Downloading sport gallery images..."
for i in {1..6}; do
  curl -L "https://picsum.photos/1200/1600?random=sport$i" -o "public/photos/sport/sport-$i.jpg"
  sleep 1
done

# Download wildlife gallery images (portrait)
echo "Downloading wildlife gallery images..."
for i in {1..6}; do
  curl -L "https://picsum.photos/1200/1600?random=wildlife$i" -o "public/photos/wildlife/wildlife-$i.jpg"
  sleep 1
done

# Download travel gallery images (portrait)
echo "Downloading travel gallery images..."
for i in {1..6}; do
  curl -L "https://picsum.photos/1200/1600?random=travel$i" -o "public/photos/travel/travel-$i.jpg"
  sleep 1
done

echo "✓ All placeholder images downloaded successfully!"
echo "You can now run 'npm run dev' to see your site with images."
