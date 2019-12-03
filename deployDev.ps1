$deployPath = "dist\dev\deploy";
$vsixPath = "dist\dev\vsix";

if(Test-Path $deployPath\*) 
{
    rm -r $deployPath\*
}; 

npx webpack --config webpack.dev.js;
tfx extension create --output-path $vsixPath --rev-version --overrides-file vss-extension.dev.json;

$last = gci $vsixPath | sort LastWriteTime | select -last 1; 

if(Test-Path $deployPath\*) 
{
    rm -r $deployPath\*
};

Expand-Archive $last -DestinationPath $deployPath;