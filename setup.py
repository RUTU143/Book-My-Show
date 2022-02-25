from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in bookmyshow/__init__.py
from bookmyshow import __version__ as version

setup(
	name="bookmyshow",
	version=version,
	description="Book Movie",
	author="Rutuja Jadhav",
	author_email="jrutuja248@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
