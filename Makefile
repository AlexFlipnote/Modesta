target: ;

version:
	@grep -o "Modesta v.* " ./dist/modesta.css

docs_build:
	@cd ./docs && python make.py && cd ..

build:
	sass --no-source-map scss:dist --style compressed

dev:
	sass --no-source-map --watch scss:dist --style compressed
