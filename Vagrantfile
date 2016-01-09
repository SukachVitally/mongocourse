# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  config.vm.box = "bento/centos-7.1"

  config.berkshelf.enabled = true
  config.berkshelf.berksfile_path = "./cookbooks/mongocourse/Berksfile"
  config.vm.provision "chef_solo" do |chef|
    chef.add_recipe "mongocourse"
    chef.add_recipe "mongocourse::custom"
  end
  config.vm.network "forwarded_port", guest: 8080, host: 8080
end
