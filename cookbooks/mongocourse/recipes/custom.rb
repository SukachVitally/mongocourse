home_dir = node[:home_dir]
dev_owner = node[:dev_owner]
venv_dir = node[:venv_dir]

pip = "#{node[:venv_dir]}/bin/pip"

execute 'venv init' do
  user dev_owner
  command "virtualenv #{venv_dir}"
  action :run
end
Chef::Log.info("Virtualenv directory created")

template "/etc/yum.repos.d/mongodb-org-3.2.repo" do
    source 'mongodb-org-3.2.repo.erb'
end

execute 'install mongo' do
  command "yum install -y mongodb-org"
  action :run
end

template "/etc/selinux/config" do
    source 'config.erb'
end
Chef::Log.info("Disabled selinux")

execute 'install mongo' do
  command "yum install -y mongodb-org"
  action :run
end

execute 'pip requirement install' do
  user dev_owner
  command "#{pip} install bottle"
  action :run
end
Chef::Log.info("Python requirement")
