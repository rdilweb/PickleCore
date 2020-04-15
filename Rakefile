task default: %w[build]

task :build do
  sh "rm -rf *.gem" unless Gem.win_platform?
  sh "bundle exec gem build *.gemspec"
end

task :release do
  Rake::Task["build"].invoke
  sh "gem push *.gem"
end
