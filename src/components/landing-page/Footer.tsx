export function Footer() {
  return (
    <footer className="w-full border-t bg-muted/60">
      <div className="container flex h-16 items-center justify-center px-4 md:px-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} MaxilloConnect. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
