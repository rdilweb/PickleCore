# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "picklecore"
  spec.version       = "0.1.0"
  spec.authors       = ["Reece Dunham", "Param Thakkar"]
  spec.email         = ["me@rdil.rocks"]

  spec.summary       = "RDIL.rocks Theme"
  spec.homepage      = "https://github.com/RDIL/PickleCore"
  spec.license       = "All Rights Reserved"

  spec.metadata["plugin_type"] = "theme"

  spec.files = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r!^(assets|_(includes|layouts|sass)/|(LICENSE|README)((\.(txt|md)|$)))!i)
  end

  spec.add_runtime_dependency "jekyll", ">= 3.5", "< 5.0"
  spec.add_runtime_dependency "jekyll-default-layout", "= 0.1.4"
  spec.add_runtime_dependency "jekyll-relative-links", "= 0.6.0"
  spec.add_runtime_dependency "jekyll-sass-converter", "1.5.2"

  spec.add_development_dependency "bundler"
  spec.add_development_dependency "rake"
end
