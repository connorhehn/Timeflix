#!/bin/bash

# Set variables
EXTENSION_NAME="Timeflix"
BUILD_DIR="build"
ZIP_FILE="$EXTENSION_NAME.zip"

# Create a clean build directory
echo "Cleaning up previous build..."
rm -rf $BUILD_DIR
mkdir $BUILD_DIR

# Copy all necessary files to the build directory
echo "Copying files to build directory..."
cp -r manifest.json popup.html popup.js styles.css content.js assets $BUILD_DIR/

# Create the ZIP file
echo "Creating ZIP file..."
cd $BUILD_DIR
zip -r ../$ZIP_FILE . > /dev/null
cd ..

# Clean up the build directory
echo "Cleaning up build directory..."
rm -rf $BUILD_DIR

# Success message
echo "Build complete! Created $ZIP_FILE"
