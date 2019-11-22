# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "picklecore".freeze
  spec.version       = "0.9.0"
  spec.authors       = ["Reece Dunham", "Param Thakkar"]
  spec.email         = ["me@rdil.rocks"]
  spec.summary       = "A Jekyll theme built to make personal sites and small websites, but can easily scale!"
  spec.homepage      = "https://github.com/rdilweb/PickleCore"
  spec.license       = "MPL-2.0".freeze

  spec.metadata = {
    "bug_tracker_uri"   => "https://github.com/rdilweb/PickleCore/issues",
    "documentation_uri" => "https://github.com/rdilweb/PickleCore/blob/master/README.md",
    "homepage_uri"      => "https://github.com/rdilweb/PickleCore/",
    "source_code_uri"   => "https://github.com/rdilweb/PickleCore/tree/master",
    "wiki_uri"          => "https://github.com/rdilweb/PickleCore/blob/master/README.md"
  }
  spec.metadata["plugin_type"] = "theme"

  spec.files = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r!^(assets|_(includes|layouts|sass)/|(LICENSE|README)((\.(txt|md)|$)))!i)
  end

  spec.add_runtime_dependency "jekyll", ">= 3.5", "< 4.0"
  spec.add_runtime_dependency "jekyll-default-layout", "= 0.1.4"
  spec.add_runtime_dependency "jekyll-relative-links", "= 0.6.0"

  spec.add_development_dependency "bundler", "= 2.0.2"
  spec.add_development_dependency "rake", "= 13.0.0"
end
