import click
import boto3


@click.command()
@click.argument("project")
@click.option("-v", "--verbose", help="Output additional information.", is_flag=True)
def main(project, verbose):
    if verbose:
        print(f"You entered {project} with verbose set to {verbose}")
    else:
        print(f"You entered {project}")

if __name__ == "__main__":
    main()
