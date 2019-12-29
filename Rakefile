require 'bundler'

abort('Please run rake using `bundler exec rake`') unless ENV["BUNDLE_BIN_PATH"]

task default: %w[build]

task :build do
  puts "Start phase 'gem build'"
  sh "bundle exec gem build *.gemspec"
  puts "End phase 'gem build'"
end
