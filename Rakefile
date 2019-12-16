require 'bundler'

abort('Please run rake using `bundler exec rake --trace --verbose`') unless ENV["BUNDLE_BIN_PATH"]

task default: %w[build]

task :build do
  puts "Start phase 'gem build'"
  sh "bundle exec gem build *.gemspec"
  puts "End phase 'gem build'"
end

task :push do
  puts "Start phase 'gem push'"
  sh "gem push ./*.gem"
  puts "End phase 'gem push'"
end
