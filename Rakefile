require 'bundler'

abort('Please run tests using `bundle exec rake --trace --verbose`') unless ENV["BUNDLE_BIN_PATH"]

task default: %w[test]

task :test do
  puts "Start phase 'gem build'"
  sh "bundler exec gem build *.gemspec"
  puts "End phase 'gem build'"
end
