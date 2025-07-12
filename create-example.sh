if [ -z "$1" ]; then
    echo "Usage $1 <example-name>"
    exit 1
fi

EXAMPLE_HOME="./examples/$1"

rsync -av --exclude 'node_modules' "./base-project/" $EXAMPLE_HOME

# update the "name" field in package.json of the copied project
PACKAGE_JSON="$EXAMPLE_HOME/package.json"
if [ -f "$PACKAGE_JSON" ]; then
    sed -i '' "s|\"name\": *\"[^\"]*\"|\"name\": \"$1\"|" "$PACKAGE_JSON"
fi

cd "$EXAMPLE_HOME"
npm i
mv ".schema.env" ".env"