task default: %w[serve]

desc "build and upload the gem"
task :release do
  sh "rm -rf *.gem" unless Gem.win_platform?
  sh "bundle exec gem build *.gemspec"
  sh "gem push *.gem"
end

desc "run the test site"
task :serve do
  sh "cd testSite && jekyll s"
end

desc "set up the test site"
task :bootstrap do
  directory "testSite/_sass"
  sh "cd testSite/_sass && git clone https://github.com/jgthms/bulma.git"
end
