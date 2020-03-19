task default: %w[build]

task :build do
  puts "Start phase 'gem build'"
  sh "rm -rf *.gem" unless Gem.win_platform?
  sh "bundle exec gem build *.gemspec"
  puts "End phase 'gem build'"
end

task :release do
  Rake::Task["build"].invoke
  puts "Start phase 'gem push'"
  sh "gem push *.gem"
  puts "End phase 'gem push'"
end
